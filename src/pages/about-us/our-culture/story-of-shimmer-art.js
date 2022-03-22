import React, { Fragment } from "react"

import Sub from "~layout/sub"

import aside from "~content/about-us/aside"

const crumbs = [
  { text: "About Us", to: "/about-us" },
  { text: "Our Culture", to: "/about-us/our-culture" },
  {
    text: "Story of Shimmer Art",
    to: "/about-us/our-culture/Story of Shimmer Art",
  },
]

const StoryOfShimmerArtPage = () => {
  let content = (
    <Fragment>
      <h1>Story of Shimmer Art</h1>
      <p>
        The art of pre-historic war and the discovery of technology.
      </p>
      <p>
        Welcome to CommonTown's very own wall art. Let us bring you to another world we have crafted, the world of the production team.
      </p>
      <p>
        When you step in, please look on your right, get mesmerized by our dedicative robots (representing Tinsel, Reflection and Smart) attacking Loch-Ness monsters, the bugs that we fight everyday. On your left, flying Pterodactyl (Thunderbird) is ready to strike OT, while the T-rex is ready to roar and fight deadlines!! Brontosaurus backs up with its huge body capacity... don't worry it is a vegetarian :) Stegosaurus scares the bugs off with its spiky look.
      </p>
      <p>
        The designers are dedicated in work! When you step in further, watch your head!! Beware of flying codes thrown by our cavemen (Software Engineers), CommonTown's SE people are united to fight bugs to death... And hey! Look! The giant squid is great in multitasking and supporting our networks!! He fights Loch-Ness at the back-end. We collaborate stone age characters with modern technology to symbolize that we are always more advanced in invention and innovation than others.
      </p>
      <p>
        We use our wild imagination and creativity in fighting for victory. United we work, united we stand. Do drop by Shimmer room and experience how the story comes alive now!
      </p>
      <p>
        Our dedicative robots (represent Tinsel, Reflection and Smart) attacking Loch-ness monsters, the bugs that we fight everyday.
      </p>

      <img
        src={require("~images/ShimmerArt.jpg").default}
        alt="Story of Shimmer Art"
        title="Story of Shimmer Art"
      />
    </Fragment>
  )

  return (
    <Sub
      title="Story of Shimmer Art"
      crumbs={crumbs}
      aside={aside}
      content={content}
    />
  )
}

export default StoryOfShimmerArtPage
