import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control Of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret of financial freedom. start your
          journey today.
        </p>

        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="What Is Your Name "
            aria-label="Your name"
            required
            autoComplete="given-name"
          />
          <input type="hidden" value="newUser" name="_action" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="" width={600} />
    </div>
  );
};

export default Intro;
