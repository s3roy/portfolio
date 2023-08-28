import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full d:text-sm">
          <ul>
            {work.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] d:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={'Software Development Engineer'}
            company={'Onato'}
            companyLink={''}
            time={'April,2023-Present'}
            address={'Pune,India'}
            work={[
              'Designed and maintained a robust Next.js application for the company internal dashboard, leveraging React Hooks and Redux toolkit for state management, enhancing data accessibility, and improving decision-making processes.',
              'Leveraged Tailwind CSS and Material UI to create a responsive and user-friendly interface, adhering to modern design principles and increasing user engagement by 20%.',
              'Constructed an internal chat application for customer support, improving response times by 30% and boosting customer satisfaction by 15%.',
            ]}
          />
          <Details
            position={'Product Solution Engineer'}
            company={'DemandFarm'}
            companyLink={''}
            time={'July,2022-March,2023'}
            address={'Pune,India'}
            work={[
              `Designed a Node.js-based CLI tool, integrating MySQL, Axios, Yargs, and Console.Table to retrieve and display user
metrics, enhancing system integration insights.
Launched a real-time Slack bot via the Slack API, driving a 20% error reduction and optimizing productivity by 8%
through immediate error messages and login alerts.
Streamlined processes to eliminate manual checks, resulting in a time-saving of 24 hours weekly.
Led a two-way integration between KAM and external CRM systems using TypeScript, Node.js, and AWS webhooks,
streamlining database operations and data synchronization.
Decreased database errors by 80% and reduced database calls by 43% by implementing Sequelize ORM, ensuring robust
and efficient data management.
Developed a user-centric REST API with Spring Boot and PostgreSQL for consistent user data management and
designed an intuitive admin interface using Next.js, React, and Chakra UI for enhanced user navigation and experience.
Optimized data lookup by introducing an infinite scroll feature, leading to a 20% speed-up in user search activities.`,
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
