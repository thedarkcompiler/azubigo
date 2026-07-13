import {
checkScheduledEmails
}
from "@/lib/checkScheduledEmails";


export async function GET(){


await checkScheduledEmails();


return Response.json({

checked:true

});


}