import { useState } from "react";

export default function Demo() {
  const [primaryColor, setPrimaryColor] = useState("#1e2a78");
  const [secondaryColor, setSecondaryColor] = useState("#f7cbaa");

  const handlePrimaryChange = (e) => setPrimaryColor(e.target.value);
  const handleSecondaryChange = (e) => setSecondaryColor(e.target.value);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
      }}
    >
      <header className="w-full max-w-md text-center mb-8">
        <img src="logo.png" alt="Atelier Logo" className="h-10 mx-auto mb-4" />
        <h1 className="text-white text-2xl font-bold">
          Made by <em>Designers</em> for <em>Designers</em>
        </h1>
      </header>

      <section className="flex justify-center gap-4 mb-8">
      </section>

      <div className="flex gap-4">
      </div>

      <div className="fixed bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
        <div className="mb-2">
          <label className="text-sm mr-2">Primary</label>
          <input type="color" value={primaryColor} onChange={handlePrimaryChange} />
        </div>
        <div>
          <label className="text-sm mr-2">Secondary</label>
          <input type="color" value={secondaryColor} onChange={handleSecondaryChange} />
        </div>
      </div>
    </div>
  );
}

