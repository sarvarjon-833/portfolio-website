import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "26b067dd-6401-4978-b66e-3445bca9c076");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Sent successfully!");
        form.reset();
      } else {
        alert("Something went wrong! Please try again!");
      }
    } catch (error) {
      alert("Something went wrong! Please try again!");
    }
  };

  return (
    <section
      id="contacts"
      className=" mx-auto w-full px-4 md:px-6 lg:px-8 sm:px-6 pt-32 py-20 bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto space-y-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl text-gray-100">
          Let's Work Together
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm md:text-base">
          Ready to bring your next project to life? Let's discuss how my
          expertise in full-stack development and DevOps can help achieve your
          goals.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <Card className="bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900/80 rounded-lg transtition-colors ">
            <div className="flex items-center gap-6 p-4 md:p-6">
              <Mail className="w-4 h-4 text-emerald-400 " />
              <div>
                <h4 className="text-zinc-100 font-medium">Email</h4>
                <p className="text-sm text-zinc-400 mt-1">
                  sarvarjonniyazov833@gmail.com
                </p>
              </div>
            </div>
          </Card>
          <Card className="bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900/80 rounded-lg transtition-colors ">
            <div className="flex items-center gap-6 p-4 md:p-6">
              <Phone className="w-4 h-4 text-emerald-400 " />
              <div>
                <h4 className="text-zinc-100 font-medium">Number</h4>
                <p className="text-sm text-zinc-400 mt-1">+82 10 73484884</p>
              </div>
            </div>
          </Card>
          <Card className="bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900/80 rounded-lg transtition-colors ">
            <div className="flex items-center gap-6 p-4 md:p-6">
              <MapPin className="w-4 h-4 text-emerald-400 " />
              <div>
                <h4 className="text-zinc-100 font-medium">Location</h4>
                <p className="text-sm text-zinc-400 mt-1">
                  Available for Remote Work
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900/80 rounded-lg transtition-colors">
          <CardHeader>
            <CardTitle className="text-zinc-100">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6 h-full">
              <div className="flex flex-col gap-6">
                <div className="flex md:flex-row gap-4 items-center justify-around">
                  <Input
                    name="name"
                    className="bg-zinc-800/50 h-10 text-white text-lg"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    name="email"
                    className="bg-zinc-800/50 h-10 text-white text-lg"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <Input
                  name="subject"
                  className="bg-zinc-800/50 h-10 text-white text-lg"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
                <Textarea
                  name="message"
                  className="bg-zinc-800/50 h-10 text-white text-lg"
                  id="textarea-message"
                  placeholder="Your Message"
                />
                <Button
                  type="submit"
                  className={
                    "w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-300 font-medium rounded-lg flex items-center justify-center gap-2"
                  }
                >
                  <Send className="w-5 h-5" />
                  Send message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
