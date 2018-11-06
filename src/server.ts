interface SomeResponse {
  statusCode: number;
  body: string;
}

export async function hello (event: any, context: any) {
  const response: SomeResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10)
    })
  };

  return response
};