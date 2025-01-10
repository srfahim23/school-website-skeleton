const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16 px-4 mb-12 rounded-lg">
        <h1 className="text-4xl font-bold text-center">About Our School</h1>
        <p className="text-center mt-4 max-w-3xl mx-auto">
          Providing quality education and shaping future leaders since 1990
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To provide quality education that develops intellectual, moral, and social values, 
              preparing students to become responsible global citizens and lifelong learners.
              We strive to create an environment that fosters creativity, critical thinking,
              and character development.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational institution that nurtures excellence, creativity, 
              and innovation while fostering cultural values and moral integrity. We aim to
              be recognized nationally for our academic excellence and student achievements.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our History</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 1990, our school began with a vision to provide quality education
              to the children of our community. What started as a small institution with
              just a handful of students has grown into a comprehensive educational center
              that serves hundreds of students.
            </p>
            <p>
              Over the years, we have continuously evolved our teaching methods and
              facilities while maintaining our core values and commitment to excellence.
              Our dedicated teachers and staff have been instrumental in shaping the
              futures of countless students who have gone on to achieve success in
              various fields.
            </p>
            <p>
              Today, we stand as a testament to our founding principles, offering
              modern facilities, comprehensive curriculum, and a nurturing environment
              that encourages students to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Academic Excellence</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>100% pass rate in SSC examinations</li>
              <li>Multiple students in top 10 nationally</li>
              <li>Excellence awards in competitions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Sports Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>District champions in football</li>
              <li>Regional winners in cricket</li>
              <li>National level participants</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Cultural Recognition</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Best performance in cultural programs</li>
              <li>Art competition winners</li>
              <li>National level debate champions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;