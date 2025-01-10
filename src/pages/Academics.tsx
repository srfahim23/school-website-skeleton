const Academics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Academic Programs</h1>

      {/* Academic Levels */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Education Levels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Primary Section</h3>
            <p className="text-gray-600 mb-4">Grades 1-5</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Foundation in core subjects</li>
              <li>Interactive learning</li>
              <li>Character development</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Junior Section</h3>
            <p className="text-gray-600 mb-4">Grades 6-8</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Advanced core subjects</li>
              <li>Introduction to specialized subjects</li>
              <li>Project-based learning</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3">Secondary Section</h3>
            <p className="text-gray-600 mb-4">Grades 9-10</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>SSC preparation</li>
              <li>Career guidance</li>
              <li>Specialized training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Curriculum</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Our curriculum follows the National Curriculum and Textbook Board (NCTB) 
            guidelines while incorporating modern teaching methodologies and additional 
            resources to enhance learning outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Core Subjects</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Bangla</li>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Religious Studies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Co-Curricular Activities</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Sports</li>
                <li>Arts and Crafts</li>
                <li>Music</li>
                <li>Debate Club</li>
                <li>Science Club</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;