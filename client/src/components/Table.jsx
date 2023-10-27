const Table = () => {
  return (
    <>
      <h1 className="text-orange-600 font-bold text-center">service calls</h1>
      <table className="w-[98%] mx-auto bg-slate-300 border border-slate-800 my-2">
        <thead>
          <tr>
            <th className="">service call</th>
            <th>licensing</th>
            <th>car modal</th>
            <th>opening date</th>
            <th>opening time</th>
            <th>description</th>
            <th>status</th>
            <th>factor</th>
            <th>status</th>
            <th>last activity</th>
            <th>location</th>
            <th>destination</th>
            <th>date postponed</th>
            <th>client name</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Table;
