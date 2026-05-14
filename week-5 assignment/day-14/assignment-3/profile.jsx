function Profile(props) {
  let { profile } = props;

  return (
    <div className="gap-6 px-10 py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {profile.map((proobj, index) => (
        <div key={index} className="p-3 border-2 rounded-md shadow-2xl">
          <div className="relative ">
            <img
              className="w-full h-52 object-cover rounded-md"
              src={proobj.img}
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full absolute bottom-2 left-2 border-2"
              src={proobj.img1}
              alt=""
            />
          </div>
          <div className="mt-4">
            <h1 className="pb-2 font-semibold">{proobj.title}</h1>
            <p className="pb-2">{proobj.description}</p>
            <h1 className="pb-2 font-bold">{proobj.instructor}</h1>
            <h1>{proobj.date}</h1>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Profile;