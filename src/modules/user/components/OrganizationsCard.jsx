import users from "../../../mock/users/users";
import organizations from "../../../mock/organizations/organizations";
import Card from "../../../shared/components/Card";
import Badge from "../../../shared/components/Badge";


export default function OrganizationsCard() {

  const user = users[0];


  if (!user) {
    return null;
  }

  const userOrganizations = organizations.filter((organization) =>
    user.organizationIds.includes(organization.id)
  );


  return (

    <Card>


      <h2 className="
        mb-6
        text-2xl
        font-bold
      ">
        Organizations
      </h2>



      <div className="space-y-5">


        {userOrganizations.map((org) => (

          <div
            key={org.id}
            className="
              rounded-xl
              border
              border-gray-200
              p-5
            "
          >


            <div className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            ">


              <h3 className="
                text-lg
                font-semibold
              ">
                {org.name}
              </h3>


              <Badge variant="green">
                {org.role}
              </Badge>


            </div>


          </div>

        ))}


      </div>


    </Card>

  );

}