import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <Link href={'/aboutus'} className="box">
          <h3>Upcoming</h3>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" className="postimg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="textcontainer">
            <p>Zuckerberg Tries the Apple Vision Pro, Calls Quest 3 ‘the Better Product’</p>
            <p className="timetag"> LAST UPDATED ON: FEBRUARY 4, 2024 </p>
            </div>
          </div>
        </Link>
        <Link href={'/aboutus'} className="box">
          <h3>Upcoming</h3>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" className="postimg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="textcontainer">
            <p>Zuckerberg Tries the Apple Vision Pro, Calls Quest 3 ‘the Better Product’</p>
            <p className="timetag"> LAST UPDATED ON: FEBRUARY 4, 2024 </p>
            </div>
          </div>
        </Link>
        <Link href={'/aboutus'} className="box">
          <h3>Upcoming</h3>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" className="postimg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="textcontainer">
            <p>Zuckerberg Tries the Apple Vision Pro, Calls Quest 3 ‘the Better Product’</p>
            <p className="timetag"> LAST UPDATED ON: FEBRUARY 4, 2024 </p>
            </div>
          </div>
        </Link>
        <Link href={'/aboutus'} className="box">
          <h3>Upcoming</h3>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" className="postimg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="textcontainer">
            <p>Zuckerberg Tries the Apple Vision Pro, Calls Quest 3 ‘the Better Product’</p>
            <p className="timetag"> LAST UPDATED ON: FEBRUARY 4, 2024 </p>
            </div>
          </div>
        </Link>
        <Link href={'/aboutus'} className="box">
          <h3>Upcoming</h3>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" className="postimg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <div className="textcontainer">
            <p>Zuckerberg Tries the Apple Vision Pro, Calls Quest 3 ‘the Better Product’</p>
            <p className="timetag"> LAST UPDATED ON: FEBRUARY 4, 2024 </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
