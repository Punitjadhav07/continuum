"use client";
import { useState } from "react";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [framework, setFramework] = useState("");

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Continuum App</h1>

      {/* Some input to wait for page load */}
      <input className="some-input border p-2 mb-4 block" placeholder="Search..." />

      {/* Dialog Button */}
      <button
        className="dialog-button bg-blue-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => setDialogOpen(true)}
      >
        Open Dialog
      </button>

      {/* Dialog */}
      {dialogOpen && (
        <div className="dialog-allow fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">This is a dialog!</p>
            <button
              className="dialog-cancel bg-red-400 text-white px-3 py-1 rounded"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Form */}
      <div className="mt-6 border p-4 rounded">
        <input
          className="name-input border p-2 mb-2 block w-full"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button
          className="role-trigger bg-gray-200 px-3 py-1 rounded mb-2"
          onClick={() => {}}
        >
          Select Role
        </button>
        <input
          className="role-option border p-2 mb-2 block w-full"
          placeholder="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
        />

        <button
          className="role-trigger bg-gray-200 px-3 py-1 rounded mb-2"
          onClick={() => {}}
        >
          Select Role ▼
        </button>
        <input
          className="framework-input border p-2 mb-2 block w-full"
          placeholder="Framework"
          value={framework}
          onChange={e => setFramework(e.target.value)}
        />
        <select className="framework-option border p-2 mb-2 block w-full">
          <option>Next.js</option>
          <option>React</option>
        </select>

        <button
          className="submit-btn bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setSubmitted(true)}
        >
          Submit
        </button>

        {submitted && <p className="text-green-600 mt-2">✅ Form Submitted!</p>}
      </div>
    </main>
  );
}