const getPipeline = (match = {}, include = "") => {
  return [
    {
      $project: {
        courses: {
          // merge all courses
          $concatArrays: ["$1st Year", "$2nd Year", "$3rd Year", "$4th Year"],
        },
      },
    },

    {
      // deconstruct the courses
      $unwind: "$courses",
    },

    {
      // match if it is from BSIS or BSIT
      $match: match,
    },

    {
      $project: include
        ? {
            // display all fields
            code: "$courses.code",
            name: "$courses.description",
            units: "$courses.units",
            tags: "$courses.tags",
          }
        : {
            // display name and specialization
            name: "$courses.description",
            specialization: {
              $arrayElemAt: ["$courses.tags", 1],
            },
          },
    },

    {
      $sort: {
        name: 1,
      },
    },
  ];
};

export default getPipeline;
