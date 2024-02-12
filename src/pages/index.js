import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="box">
          <h2>Box 1</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 1" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 1 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 2</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 2" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 2 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <div className="boxContent">
            <div className="imageContainer">
              <Image src="/boximg.jpg" alt="Image 3" layout="fill" objectFit="cover" />
            </div>
            <p>Content for Box 3 goes here...</p>
          </div>
        </div>
        
        {/* Add more boxes with images */}
      </div>
    </>
  );
}
