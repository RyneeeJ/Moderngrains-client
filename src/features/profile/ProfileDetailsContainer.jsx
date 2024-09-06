function ProfileDetailsContainer({ label, children }) {
  return (
    <div className="mb-4 flex flex-col space-y-1">
      <div className="flex justify-between">
        <span className="text-xs xs:text-sm sm:text-base md:text-lg">
          {label}
        </span>

        {label === "Address" && (
          <button className="text-xs hover:underline xs:text-sm sm:text-base md:text-lg">
            Use Geolocation
          </button>
        )}
      </div>

      <div className="flex items-center gap-1">{children}</div>
    </div>
  );
}

export default ProfileDetailsContainer;
