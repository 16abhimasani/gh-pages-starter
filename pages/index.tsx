import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../animations/page";

const Home: React.FC = () => (
  <motion.main {...fadeInPage}>
    <h1>Wiggle</h1>
  </motion.main>
);

export default Home;
