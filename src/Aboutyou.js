import React from 'react';
import pics from './image/Image1/hero42.png';

const AboutSection = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl font-semibold text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
          alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
        <div className="col-span-1 lg:col-span-1 flex items-center">
          <img src={pics} className="rounded-full h-24 w-24 lg:h-auto lg:w-auto" alt="" />
        </div>
        <div className="col-span-1 lg:col-span-1 pt-4 lg:pt-0 content">
          <h3 className="text-xl font-bold">Web Developer.</h3>
          <p className="italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <ul>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Surname:</strong> <span>Aghughu</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Firstname:</strong> <span>Paulinus Ayere</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Education:</strong> <span>Master's degree (in View)</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>City of residence:</strong> <span>Darmstadt</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Country of residence:</strong> <span>Germany</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Phone Number</strong> <span>+49 15752081414</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>Email:</strong> <span>paulinusaghughu@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i> <strong>LinkedIn:</strong> <span>http://www.linkedin.com/in/paulinusaghughu</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-chevron-right mr-1"></i><strong>Github:</strong> <span>https://github.com/PaulAyere</span>
</li>
</ul>
</div>
</div>
<p className="mt-4">
Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci
omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut
dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magnilaudantium dolores.
</p>
</div>
</div>
</div>
);
};

export default AboutSection;
