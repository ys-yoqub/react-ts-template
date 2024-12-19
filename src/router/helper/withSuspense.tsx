import { Suspense } from "react";
import DefaultLoading from "../../shared/components/DefaultLoading";

/**
 * A utility function to wrap a lazy-loaded component with React.Suspense.
 *
 * @param Component - A lazy-loaded React component.
 * @param LoadingComponent - A custom loading component (optional).
 * @returns A React component wrapped with Suspense and fallback.
 */
const withSuspense = (
  Component: React.LazyExoticComponent<React.FC>,
  LoadingComponent: React.ReactNode = <DefaultLoading />
) => {
  return (
    <Suspense fallback={LoadingComponent}>
      <Component />
    </Suspense>
  );
};

export default withSuspense;
