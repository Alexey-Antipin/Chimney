import { SvgComponent } from "../../svg";
import "./index.scss";

export const Videofragment:React.FC = () => {
  return (
    <div className="part">
      <div className="content-mixin">
        <div className="line"></div>
        <h2 className="title">Видео об установке</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="video-block">
        <div className="fone-1">
          <SvgComponent word="blob" />
          <div className="group-1">
            <SvgComponent word="group" />
          </div>
        </div>

        <iframe
          className="videoplayer"
          src="https://www.youtube.com/embed/2KKRNP3WzqE"
          title="YouTube                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        player"
          frameBorder="0"
          allow="accelerometer;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            web-share"
          allowFullScreen
        />

        <div className="fone-2">
          <SvgComponent word="blobbig" />
          <div className="group-2">
            <SvgComponent word="group" />
          </div>
        </div>
      </div>
    </div>
  );
};
