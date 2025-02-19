import React, { useState } from 'react';

const Contact = () => {
 
  const [activeInfo, setActiveInfo] = useState(null);

 
  const toggleInfo = (info) => {
    setActiveInfo((prevInfo) => (prevInfo === info ? null : info)); 
  };

  return (
    <div>
      <section className="w-full md:flex md:justify-center">
        {/*-------- <!-- Contact Section -->-----------------------*/}

        <div id="contact" className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-indigo-600 text-center mb-3">Contact</h2>
          <div className="flex items-center justify-center mb-14">
            <div className="relative">
              {/*---------  <!-- Conteneur des icônes -->----------- */}
              <div className="flex space-x-8">
                {/*------------ <!-- Icône Téléphone -->------- */}
                <div className="relative text-center">
                  <div
                    onClick={() => toggleInfo('email-info')}
                    className="cursor-pointer text-4xl text-gray-600 hover:text-indigo-600"
                  >
                    <i className="fa-solid fa-phone text-3xl"></i>
                  </div>
                  {activeInfo === 'email-info' && (
                    <div className="info-box absolute left-1/2 transform -translate-x-1/2 mt-2 text-gray-700 bg-white p-2 rounded shadow-md w-max">
                      0897927432
                    </div>
                  )}
                </div>

                {/*-----------<!-- Icône WhatsApp -->---------------- */}
                <div className="relative text-center">
                  <div
                    onClick={() => toggleInfo('phone-info')}
                    className="cursor-pointer text-4xl text-gray-600 hover:text-indigo-600"
                  >
                    <i className="fa-brands fa-whatsapp text-[#25D366] hover:text-green-500"></i>
                  </div>
                  {activeInfo === 'phone-info' && (
                    <div className="info-box absolute left-1/2 transform -translate-x-1/2 mt-2 text-gray-700 bg-white p-2 rounded shadow-md w-max">
                      0897927432
                    </div>
                  )}
                </div>

                {/*-------------- <!-- Icône LinkedIn -->------------ */}
                <div className="relative text-center">
                  <div
                    onClick={() => toggleInfo('linkedin-info')}
                    className="cursor-pointer text-4xl text-gray-600 hover:text-indigo-600"
                  >
                    <i className="fa-brands fa-linkedin text-[#0077B5]"></i>
                  </div>
                  {activeInfo === 'linkedin-info' && (
                    <div className="info-box absolute left-1/2 transform -translate-x-1/2 mt-2 text-gray-700 bg-white p-2 rounded shadow-md w-max">
                      patrick kayemba
                    </div>
                  )}
                </div>

                {/*-----------  <!-- Icône GitHub -->------------- */}
                <div className="relative text-center">
                  <div
                    onClick={() => toggleInfo('github-info')}
                    className="cursor-pointer text-4xl text-gray-600 hover:text-indigo-600"
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  {activeInfo === 'github-info' && (
                    <div className="info-box absolute left-1/2 transform -translate-x-1/2 mt-2 text-gray-700 bg-white p-2 rounded shadow-md w-max">
                      patrickkayemba81@gmail.com
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <form id="contact-form" className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Entrez votre nom"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                id="message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white w-full bg-indigo-600 font-medium py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
