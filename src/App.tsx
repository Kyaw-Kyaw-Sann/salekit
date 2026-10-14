function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="rounded-xl border border-border bg-surface p-8 text-center shadow-sm">
        <img
          src="/SaleKit.svg"
          alt="SaleKit"
          className="mx-auto h-20 w-20"
        />

        <h1 className="mt-4 text-3xl font-bold text-heading">
          SaleKit
        </h1>

        <p className="mt-2 text-body">
          Point of Sale starter app
        </p>

        <button
          type="button"
          className="mt-6 rounded-md bg-primary px-4 py-2 text-on-primary hover:bg-primary-hover"
        >
          Setup Complete
        </button>
      </div>
    </main>
  )
}

export default App