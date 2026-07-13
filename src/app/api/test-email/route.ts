import {sendEmail} from "@/lib/mail";


export async function GET(){


await sendEmail({

to:"h_mahdi.dev@oefo.org",

subject:"Test Email",

html:"<h1>Hello from automation tool</h1>"

});


return Response.json({

success:true

});

}