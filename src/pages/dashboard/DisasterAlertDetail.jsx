import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  TriangleAlert,
  ShieldAlert,
  Clock3,
  CalendarDays,
  MapPin,
  Building2,
  CloudRain,
  Wind,
  Zap,
  Info,
} from "lucide-react";

import apiInstance from "../../config/apiInstance";

const DisasterAlertDetail = () => {
  const { alertId } = useParams();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlert = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await apiInstance.get("/disaster-alert/current");

        const alerts = response.data?.alerts || [];

        const selectedAlert = alerts.find((item) => item.id === alertId);

        if (!selectedAlert) {
          setError(
            "This disaster alert is no longer active or could not be found.",
          );
          return;
        }

        setAlert({
          ...selectedAlert,
          ...selectedAlert.details,
        });
      } catch (error) {
        console.error("Disaster alert detail error:", error);

        setError("Unable to load disaster alert details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlert();
  }, [alertId]);

  const formatDateTime = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const getSeverityClass = (severity) => {
    switch (severity?.toLowerCase()) {
      case "extreme":
        return "bg-red-600/20 text-red-300 border-red-500/30";

      case "severe":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";

      case "moderate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";

      case "minor":
        return "bg-green-500/20 text-green-300 border-green-500/30";

      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="animate-pulse">
            <div className="mb-6 h-5 w-32 rounded bg-[#171f33]" />

            <div className="rounded-3xl border border-white/10 bg-[#11192b] p-8">
              <div className="h-10 w-2/3 rounded bg-[#171f33]" />

              <div className="mt-6 h-24 rounded bg-[#171f33]" />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="h-24 rounded bg-[#171f33]" />
                <div className="h-24 rounded bg-[#171f33]" />
                <div className="h-24 rounded bg-[#171f33]" />
                <div className="h-24 rounded bg-[#171f33]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen px-6 py-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <button
            onClick={() => navigate("/dashboard")}
            className="mb-6 flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-center">
            <TriangleAlert size={42} className="mx-auto mb-4 text-red-400" />

            <h1 className="text-2xl font-bold text-white">
              Alert Not Available
            </h1>

            <p className="mt-3 text-gray-300">{error}</p>

            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Back */}

        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Main Alert */}

        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 via-[#11192b] to-[#0d1425] p-8 shadow-2xl">
          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[100px]" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px]" />

          <div className="relative">
            {/* Header */}

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500">
                  <TriangleAlert size={30} className="text-white" />
                </div>

                <div>
                  <span className="inline-flex rounded-full bg-red-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-red-300">
                    Emergency Alert
                  </span>

                  <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                    🚨 {alert.event || "Disaster Alert"}
                  </h1>

                  <p className="mt-2 text-sm text-gray-400">
                    Government emergency warning
                  </p>
                </div>
              </div>

              {/* Severity */}

              <span
                className={`w-fit rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider ${getSeverityClass(
                  alert.severity,
                )}`}
              >
                {alert.severity || "Unknown"} Severity
              </span>
            </div>

            {/* Headline */}

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-300">
                <Info size={17} />
                Alert Information
              </div>

              <p className="text-[16px] leading-8 text-[#d7d9e5]">
                {alert.headline ||
                  alert.description ||
                  "No additional information is available."}
              </p>
            </div>

            {/* Alert Information Grid */}

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Event */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <CloudRain size={20} className="text-blue-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Event
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.event || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Severity */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <ShieldAlert size={20} className="text-orange-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Severity
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.severity || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-yellow-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Urgency
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.urgency || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Certainty */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Info size={20} className="text-purple-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Certainty
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.certainty || "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Effective */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <CalendarDays size={20} className="text-green-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Effective
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {formatDateTime(alert.effective)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expires */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Clock3 size={20} className="text-red-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Expires
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {formatDateTime(alert.expires)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <MapPin size={21} className="text-green-300" />

                <h2 className="text-lg font-semibold text-white">
                  Affected Area
                </h2>
              </div>

              <p className="mt-4 leading-7 text-gray-300">
                {alert.headline ||
                  "Affected area information is not available."}
              </p>
            </div>

            {/* Instructions */}

            <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <div className="flex items-center gap-3">
                <ShieldAlert size={21} className="text-yellow-300" />

                <h2 className="text-lg font-semibold text-yellow-200">
                  Safety Instructions
                </h2>
              </div>

              <button
                onClick={() => navigate("/dashboard/disaster/flood")}
                className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                <ShieldAlert size={18} />
                Safety Guide
              </button>
            </div>

            {/* Source */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Building2 size={20} className="text-blue-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Issued By
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.sender || alert.source || "Government Authority"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Wind size={20} className="text-cyan-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Alert Status
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {alert.status || "Not available"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Issued Time */}

            <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
              <span>Alert issued: {formatDateTime(alert.sent)}</span>

              <span>Alert ID: {alert.id}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisasterAlertDetail;
