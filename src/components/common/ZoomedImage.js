const ZoomedImage = ({ src, alt, close }) => (
  <div
    className="fixed inset-0 flex justify-center items-center z-50 bg-black/60 h-full w-full"
    onClick={close}
    role="presentation"
  >
    <img src={src} alt={alt} className="h-4/5" />
  </div>
);

export default ZoomedImage;
