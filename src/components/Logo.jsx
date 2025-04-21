import LogoImage from '../../public/logo.png';

function Logo({ width }) {
  return (
    <div className='rounded-lg'>
      <img src={LogoImage} alt="Logo" 
        style={{ width:width, borderRadius: '20px' }} 

      />
    </div>
  );
}

export default Logo;