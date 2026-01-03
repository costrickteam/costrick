// frontend/src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import api from "../services/api.js";
import { Download, Search, Users } from "lucide-react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc"); // newest first
  // Advanced filter state for each column
  const [filters, setFilters] = useState({
    user_first_name: "",
    user_last_name: "",
    user_email: "",
    user_phone: "",
    user_business_name: "",
    user_business_type: "",
    user_city: "",
    // user_country: "",
    user_marketing_opt: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await api.get("/register");
      setUsers(data);
    } catch (err) {
      let msg = "Failed to load users";
      if (err.response && err.response.data && err.response.data.error) {
        msg += ": " + err.response.data.error;
      }
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  // Advanced filtering: global search + per-column filter
  const filtered = users.filter((u) => {
    // Global search
    const globalMatch = Object.values(u).some((val) =>
      val?.toString().toLowerCase().includes(search.toLowerCase())
    );
    // Per-column filters
    for (const key in filters) {
      if (
        filters[key] &&
        u[key] &&
        !u[key].toString().toLowerCase().includes(filters[key].toLowerCase())
      ) {
        return false;
      }
      if (filters[key] && !u[key]) {
        return false;
      }
    }
    return globalMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];
    if (typeof aVal === "string" && typeof bVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    if (aVal === undefined || aVal === null) return 1;
    if (bVal === undefined || bVal === null) return -1;
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  function handleSort(column) {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  }

  const exportCSV = () => {
    const headers = [
      "User ID (UUID)",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Business Name",
      "Business Type",
      "Street",
      "City",
      "Postal Code",
      // "Country",
      "Marketing Opt",
      "Registered On",
    ];
    const rows = sorted.map((u) => [
      u.user_uuid, // User ID
      u.user_first_name,
      u.user_last_name,
      u.user_email,
      u.user_phone || "",
      u.user_business_name,
      u.user_business_type,
      u.user_street,
      u.user_city,
      u.user_postal_code,
      // u.user_country,
      u.user_marketing_opt ? "Yes" : "No",
      new Date(u.created_at).toLocaleDateString(),
    ]);
    const csvContent = [headers, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `users_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // ...existing code...
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <button
            onClick={exportCSV}
            className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 md:grid-cols-5 gap-2">
        <input
          type="text"
          placeholder="First Name"
          value={filters.user_first_name}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_first_name: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={filters.user_last_name}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_last_name: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Email"
          value={filters.user_email}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_email: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Phone"
          value={filters.user_phone}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_phone: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Business Name"
          value={filters.user_business_name}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_business_name: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Business Type"
          value={filters.user_business_type}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_business_type: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="City"
          value={filters.user_city}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_city: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        {/*
        <input
          type="text"
          placeholder="Country"
          value={filters.user_country}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_country: e.target.value }))
          }
          className="border rounded px-3 py-2"
        />
        */}
        <select
          value={filters.user_marketing_opt}
          onChange={(e) =>
            setFilters((f) => ({ ...f, user_marketing_opt: e.target.value }))
          }
          className="border rounded px-3 py-2"
        >
          <option value="">Marketing Opt (All)</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-indigo-50 text-indigo-900 text-left text-sm font-semibold">
              <tr>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_uuid")}
                >
                  User ID (UUID){" "}
                  {sortBy === "user_uuid"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_first_name")}
                >
                  Name{" "}
                  {sortBy === "user_first_name"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_email")}
                >
                  Email{" "}
                  {sortBy === "user_email"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_phone")}
                >
                  Phone{" "}
                  {sortBy === "user_phone"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_business_name")}
                >
                  Business{" "}
                  {sortBy === "user_business_name"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_business_type")}
                >
                  Type{" "}
                  {sortBy === "user_business_type"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_street")}
                >
                  Address{" "}
                  {sortBy === "user_street"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                {/*
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_country")}
                >
                  Country{" "}
                  {sortBy === "user_country"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                */}
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("user_marketing_opt")}
                >
                  Marketing{" "}
                  {sortBy === "user_marketing_opt"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
                <th
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => handleSort("created_at")}
                >
                  Date{" "}
                  {sortBy === "created_at"
                    ? sortOrder === "asc"
                      ? "▲"
                      : "▼"
                    : null}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {sorted.map((user) => (
                <tr key={user.user_uuid} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs">
                    {user.user_uuid}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    {user.user_first_name} {user.user_last_name}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${user.user_email}`}
                      className="text-indigo-600 hover:underline"
                    >
                      {user.user_email}
                    </a>
                  </td>
                  <td className="px-4 py-3">{user.user_phone || "-"}</td>
                  <td className="px-4 py-3 font-medium">
                    {user.user_business_name}
                  </td>
                  <td className="px-4 py-3">{user.user_business_type}</td>
                  <td className="px-4 py-3 text-xs">
                    {user.user_street}
                    <br />
                    {user.user_city}, {user.user_postal_code}
                  </td>
                  {/* <td className="px-4 py-3">{user.user_country}</td> */}
                  <td className="px-4 py-3 text-center">
                    {user.user_marketing_opt ? (
                      <span className="text-green-600 font-bold">Yes</span>
                    ) : (
                      <span className="text-gray-400">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs font-mono">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
