import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  TelegramShareButton,
} from 'react-share';

const ShareButtons = ({ url, title, toggleVisibility }) => {
  const handleIsVisible = () => {
    toggleVisibility();
  };
  return (
    <div className="flex p-2 rounded-xl gap-3 bg-white border-mainDark border">
      <FacebookShareButton onClick={handleIsVisible} url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton onClick={handleIsVisible} url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <TelegramShareButton
        onClick={handleIsVisible}
        url={url}
        title={title}
        separator=":: "
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
};

export default ShareButtons;
