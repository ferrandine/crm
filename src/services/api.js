const base_url = "http://ec2-35-180-118-48.eu-west-3.compute.amazonaws.com";

const http = async function(path, options = {}) {
  const response = await fetch(`${base_url}/${path}`);

  const json = await response.json();

  const { data } = json;

  return data;
};

  export {
    http
  };
