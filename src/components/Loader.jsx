import "../App.css";

export function Loader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
    </div>
  );
}


export default Loader;