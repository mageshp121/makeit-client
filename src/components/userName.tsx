function UserName() {
  return (
    <div className="w-72 cols-4 ml-6 mt-4  shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
        <div className="flex items-center rounded-3xl overflow-hidden justify-center bg-indigo-50 h-12 w-12  border border-indigo-100">
          <img src="src/images/Max-R_Headshot (1).jpg" alt="" />
        </div>
        <div className="ml-4">
          <h2 className="font-semibold">Bob agastine</h2>
          <p className="mt-2 text-sm text-gray-500">@bob_agastine</p>
        </div>
      </div>
    </div>
  );
}

export default UserName;
