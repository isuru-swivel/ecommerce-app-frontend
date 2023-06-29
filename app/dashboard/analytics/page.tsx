"use client";

import Analytics from "@/components/templates/Analytics";
import useAuth from "@/hooks/useAuth";

const AnalyticsPage = () => {
  const { isAuthenticated, redirect } = useAuth();

  // //if user is not authenticated, redirect to login page
  if (!isAuthenticated) redirect();

  return (
    <div className="dashboard-page">
      <Analytics />
    </div>
  );
};

export default AnalyticsPage;
