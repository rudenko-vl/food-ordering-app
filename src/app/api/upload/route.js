export async function POST (req) {
    const data = await req.formData();
    if (data.get('file')) {
        console.log('d');
    }
    return Response.json(true);
}