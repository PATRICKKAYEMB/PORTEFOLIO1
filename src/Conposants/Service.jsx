import React from "react";
import { motion } from "framer-motion";
import web from "../Assets/logo web.png";
import interfaces from "../Assets/interface user2.png";
import hergement from "../Assets/herber2.png";

const Service = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-bold text-center mb-12 text-indigo-600"
        >
          Mes Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premier Service - Animation du haut */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center flex-col"
          >
            <img src={web} className="w-14 h-14" alt="Développement Web" />
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center mt-3">
              Développement de sites Web
            </h3>
            <p className="text-gray-600 text-center">
              Nous concevons des sites web professionnels et attractifs, parfaitement adaptés à vos besoins.
              Que vous soyez une petite entreprise ou une grande organisation, notre objectif est de vous offrir
              une présence en ligne qui reflète votre marque et captive vos clients.
            </p>
          </motion.div>

          {/* Deuxième Service - Animation de la droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center flex-col"
          >
            <img src={interfaces} className="w-14 h-14" alt="Interface Utilisateur" />
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center mt-3">
              Création d'Interfaces Utilisateur
            </h3>
            <p className="text-gray-600 text-center">
              Nous concevons des interfaces utilisateur intuitives et esthétiques pour offrir une expérience fluide
              et agréable à vos visiteurs. Grâce à une approche centrée sur l'utilisateur, chaque interaction sur
              votre site est optimisée, renforçant ainsi l'engagement et la fidélité de vos utilisateurs.
            </p>
          </motion.div>

          {/* Troisième Service - Animation de la gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center flex-col"
          >
            <img src={hergement} className="w-14 h-14" alt="Hébergement Web" />
            <h3 className="text-lg md:text-2xl font-bold mb-4 text-center mt-3">
              Hébergement Web
            </h3>
            <p className="text-gray-600 text-center">
              Nous vous offrons un accompagnement complet pour choisir la solution d'hébergement web qui convient
              le mieux à votre projet. Notre expertise vous guide à travers les options disponibles, garantissant
              que votre site soit sécurisé, performant et toujours accessible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
