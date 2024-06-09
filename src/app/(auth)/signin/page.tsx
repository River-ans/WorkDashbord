export default function SigninPage() {
  return (
    <main>
      <h1>SIGN IN</h1>
      <form className='flex flex-col gap-2'>
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button type='button' className='bg-white text-black'>
          SIGN IN
        </button>
      </form>
    </main>
  );
}
