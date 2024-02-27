import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
                <div className="custom-container">
                <div className="custom-box">
                    <div className="custom-imageContainer">
                        <Image src="/boximg2.jpg" alt="Image 1" width={250} height={250} className="custom-postimg" />
                    </div>
                    <div className="custom-textcontainer">
                        <h3>Hover Text 1</h3>
                        <div className="custom-timetag">DECEMBER 16, 2023</div>
                        <div className="custom-boxContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="custom-imageContainer">
                        <Image src="/boximg2.jpg" alt="Image 2" width={250} height={250} className="custom-postimg" />
                    </div>
                    <div className="custom-textcontainer">
                        <h3>Hover Text 2</h3>
                        <div className="custom-timetag">DECEMBER 16, 2023</div>
                        <div className="custom-boxContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="custom-imageContainer">
                        <Image src="/boximg2.jpg" alt="Image 3" width={250} height={250} className="custom-postimg" />
                    </div>
                    <div className="custom-textcontainer">
                        <h3>Hover Text 3</h3>
                        <div className="custom-timetag">DECEMBER 16, 2023</div>
                        <div className="custom-boxContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="custom-imageContainer">
                        <Image src="/boximg2.jpg" alt="Image 4" width={250} height={250} className="custom-postimg" />
                    </div>
                    <div className="custom-textcontainer">
                        <h3>Hover Text 4</h3>
                        <div className="custom-timetag">DECEMBER 16, 2023</div>
                        <div className="custom-boxContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="custom-box">
                    <div className="custom-imageContainer">
                        <Image src="/boximg2.jpg" alt="Image 5" width={250} height={250} className="custom-postimg" />
                    </div>
                    <div className="custom-textcontainer">
                        <h3>Hover Text 5</h3>
                        <div className="custom-timetag">DECEMBER 16, 2023</div>
                        <div className="custom-boxContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
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
