import { useState } from 'react';
import {Modal} from './Modal';

function SignIn() {
  const show=true;

  return (
    <div>
      <Modal show={show} />
    </div>
  );
}

export default SignIn;
