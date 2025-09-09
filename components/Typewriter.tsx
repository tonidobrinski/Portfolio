export default function Typewriter() {
  return (
    <div className="flex items-center justify-center">
      <span
        className="
          text-3xl font-mono whitespace-nowrap overflow-hidden border-r-4 border-black
          animate-typing animate-blink
        "
        style={{
          animation:
            "typing 3s steps(30, end) forwards, blink 0.8s step-end infinite 3s",
            borderColor: "#9333ea"
        }}
      >
        👋 Hello, I am Toni Dobrinski
      </span>
    </div>
  );
}
