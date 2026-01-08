const SurveyList = ({ surveys }) => {
  return (
    <div className="max-w-xl mx-auto">
      {surveys.map((s) => (
        <div key={s._id} className="bg-white p-4 mb-3 rounded shadow">
          <h3 className="font-bold">
            {s.name} ({s.rating}/5)
          </h3>
          <p className="text-sm text-gray-600">{s.email}</p>
          <p className="text-sm">Category: {s.category}</p>
          <p className="mt-2">{s.message}</p>
        </div>
      ))}
    </div>
  );
};

export default SurveyList;
