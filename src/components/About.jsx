import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          cursus eget nulla quis ullamcorper. Vestibulum risus enim, imperdiet
          quis lacus quis, interdum condimentum dolor. Aliquam a tempor nunc, a
          suscipit nisi. Maecenas sem justo, facilisis sed lacinia ut, convallis
          a lacus. In ut tempus nunc, non lobortis tellus. Quisque lectus est,
          interdum a ligula id, condimentum viverra lacus. Integer rhoncus
          mattis velit ut condimentum. Donec eget dui nec lectus ornare tempor.
          Nullam molestie, magna vitae ullamcorper sodales, lectus risus aliquet
          tortor, vitae aliquam dolor arcu sed est. Aenean blandit sem ac urna
          convallis, sed accumsan dui imperdiet.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          cursus eget nulla quis ullamcorper. Vestibulum risus enim, imperdiet
          quis lacus quis, interdum condimentum dolor. Aliquam a tempor nunc, a
          suscipit nisi. Maecenas sem justo, facilisis sed lacinia ut, convallis
          a lacus. In ut tempus nunc, non lobortis tellus. Quisque lectus est,
          interdum a ligula id, condimentum viverra lacus. Integer rhoncus
          mattis velit ut condimentum. Donec eget dui nec lectus ornare tempor.
          Nullam molestie, magna vitae ullamcorper sodales, lectus risus aliquet
          tortor, vitae aliquam dolor arcu sed est. Aenean blandit sem ac urna
          convallis, sed accumsan dui imperdiet.
        </p>
      </div>
    </div>
  );
};

export default About;
