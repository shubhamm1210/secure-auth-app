const AuthCard = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
