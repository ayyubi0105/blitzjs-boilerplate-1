import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import { Suspense } from "react"

import "app/core/styles/index.css"
import { TabContextProvider } from "app/core/components/Contexts/TabContext"
import { SnackbarProvider } from "notistack"
import Collapse from "@material-ui/core/Collapse"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Suspense fallback={<>Loading...</>}>
        <SnackbarProvider
          maxSnack={3}
          TransitionComponent={Collapse}
          preventDuplicate={false}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <TabContextProvider>{getLayout(<Component {...pageProps} />)}</TabContextProvider>
        </SnackbarProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <></>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
