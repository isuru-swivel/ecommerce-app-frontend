import React from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks";

const withAuth = (WrappedComponent: React.JSXElementConstructor<any>) => {
  // eslint-disable-next-line react/display-name
  return function (props: React.JSX.IntrinsicAttributes) {
    const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (isAuthenticated) {
      // @ts-ignore
      return <WrappedComponent {...props} />;
    } else {
      return router.replace("/login");
    }
  };
};

export default withAuth;
