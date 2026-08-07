import users from "../../../mock/users/users";
import publications from "../../../mock/publications/publications";

import EntityChip from "../../../shared/components/EntityChip";
import StatusBadge from "../../../shared/components/StatusBadge";


export default function PublicationsSection() {

  const user = users[0];


  if (!user) {
    return null;
  }


  const userPublications = publications.filter((publication) =>
    user.publicationIds.includes(publication.id)
  );



  return (

    <section
      className="
        py-20
        select-none
      "
    >


      {/* Header */}

      <div className="mb-12">


        <p
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            text-cyan-400
          "
        >
          Research Output
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-bold
          "
        >
          Publications
        </h2>


      </div>







      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >



        {userPublications.map((paper) => (


          <article
            key={paper.id}
            className="
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/[0.03]

              p-8

              transition-all
              duration-300
              ease-out

              hover:-translate-y-2

              hover:border-emerald-400/30

              hover:shadow-[0_0_35px_rgba(52,211,153,.15)]
            "
          >




            {/* Top */}

            <div
              className="
                flex
                flex-col

                gap-4

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >


              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                  opacity-60
                "
              >
                {paper.type}
              </p>



              <StatusBadge>
                {paper.status}
              </StatusBadge>


            </div>









            {/* Title */}

            <h3
              className="
                mt-7

                text-2xl
                font-bold

                leading-snug
              "
            >
              {paper.title}
            </h3>









            {/* Description */}

            <p
              className="
                mt-5

                leading-8

                opacity-75
              "
            >
              {paper.abstract}
            </p>









            {/* Metadata */}

            <div
              className="
                mt-8

                grid

                grid-cols-1

                sm:grid-cols-3

                gap-5
              "
            >


              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    opacity-60
                  "
                >
                  Journal
                </p>


                <p
                  className="
                    mt-2
                    font-semibold
                  "
                >
                  {paper.journal}
                </p>


              </div>





              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    opacity-60
                  "
                >
                  Year
                </p>


                <p
                  className="
                    mt-2
                    font-semibold
                  "
                >
                  {paper.year}
                </p>


              </div>





              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wider
                    opacity-60
                  "
                >
                  DOI
                </p>


                <p
                  className="
                    mt-2
                    font-semibold
                    break-all
                  "
                >
                  {paper.doi}
                </p>


              </div>


            </div>









            {/* Keywords */}

            <div
              className="
                mt-8
              "
            >


              <p
                className="
                  mb-4

                  text-xs
                  uppercase

                  tracking-wider

                  font-semibold

                  opacity-60
                "
              >
                Research Areas
              </p>



              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >


                {paper.keywords.map((keyword) => (


                  <EntityChip
                    key={keyword}
                    variant="research"
                  >
                    {keyword}
                  </EntityChip>


                ))}


              </div>


            </div>









            {/* Link */}

            {paper.link && (

              <div
                className="
                  mt-8
                "
              >

                <a
                  href={paper.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center

                    rounded-full

                    border
                    border-emerald-400/30

                    bg-emerald-400/5

                    px-5
                    py-2

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    hover:bg-emerald-400/10

                    hover:shadow-[0_0_20px_rgba(52,211,153,.25)]
                  "
                >
                  View Publication →
                </a>


              </div>

            )}



          </article>


        ))}



      </div>



    </section>

  );

}