export const Hero = () => {
  return (
    <div className='py-10 flex justify-center'>
      <iframe
        style={{
          width: 'min(560px,100%)',
          height: 300,
        }}
        src='https://www.youtube.com/embed/mnre2_CFh4I'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
