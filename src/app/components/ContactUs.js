"use client";

export default function ContactPage() {
    return (
        <div className="w-full bg-white">

            <section className="relative h-[420px] w-full">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="relative h-[420px] overflow-hidden rounded-sm">

                        {/* Background Image */}
                        <img
                            src="/workspace.jpg"
                            alt="Contact Us"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* Text Content */}
                        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                                Contact Us
                            </h1>

                            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-white/70 md:text-base">
                                We’re ready to support your business needs
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="space-y-12">

                        {/* INFO CARDS */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <InfoCard
                                title="ADDRESS"
                                value="No. 88/12, Sukhumvit Rd, Bangkok 10110, Thailand"
                                image="home.svg"
                            />

                            <InfoCard
                                title="PHONE"
                                value={[
                                    { text: "+66 81 234 5678", href: "tel:+66812345678" },
                                    { text: "+66 95 678 9012", href: "tel:+66956789012" },
                                ]}
                                image="phone.svg"
                            />

                            <InfoCard
                                title="EMAIL"
                                value={{ text: "ThaiSTour.com", href: "mailto:ThaiSTour.com" }}
                                image="email.svg"
                            />

                            <InfoCard
                                title="NEED QUICK HELP?"
                                value={[
                                    "Hotline support",
                                    "Email response within 24 hrs",
                                    "LINE,WhatsApp,WeChat available",
                                ]}
                                image="headset.svg"
                            />
                        </div>


                        {/* QR SECTION */}
                        <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 px-6 py-8 text-center">
                            <div className="flex justify-center gap-8">
                                <QRCard src="/QR_L.png" />
                                <QRCard src="/QR_A.png" />
                                <QRCard src="/QR_C.png" />
                            </div>

                            <p className="mt-5 text-sm font-medium text-blue-600">
                                Scan to chat via LINE, WhatsApp or WeChat
                            </p>
                        </div>

                    </div>

                    {/* RIGHT SIDE – CONTACT FORM */}
                    <div className="rounded-xl border border-gray-200 bg-white px-8 pb-8 pt-4">

                        <h2 className="mb-8 text-center text-2xl font-semibold tracking-widest text-blue-600">
                            Contact Form
                        </h2>

                        <form className="space-y-5">

                            <FormField label="Name">
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="input"
                                />
                            </FormField>

                            <FormField label="Email">
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="input"
                                />
                            </FormField>

                            <FormField label="Date">
                                <input
                                    type="date"
                                    className="w-48 rounded-lg border border-gray-200 bg-gray-200
                       px-4 py-3 text-sm text-gray-500
                       outline-none
                       focus:border-blue-500 focus:bg-white"
                                />
                            </FormField>

                            <FormField label="Service">
                                <div className="relative w-48">
                                    <select
                                        defaultValue=""
                                        className="w-full appearance-none rounded-lg border border-gray-200
                         bg-gray-200 px-4 py-3 pr-10
                         text-sm text-gray-500
                         outline-none
                         focus:border-blue-500 focus:bg-white focus:text-gray-800"
                                    >
                                        <option value="" disabled hidden>
                                            Choose Service
                                        </option>
                                        <option>IT Support</option>
                                        <option>Web Development</option>
                                        <option>Consultation</option>
                                    </select>

                                    <img
                                        src="/dropdown.svg"
                                        alt=""
                                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                                    />
                                </div>
                            </FormField>

                            <FormField label="Message">
                                <textarea
                                    rows={5}
                                    placeholder="Enter Message..."
                                    className="w-full rounded-lg border border-gray-200 bg-gray-200
                       px-4 py-3 text-sm text-gray-800
                       placeholder-gray-500
                       outline-none resize-none overflow-hidden
                       focus:border-blue-500 focus:bg-white"
                                />
                            </FormField>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-blue-600 py-3
                     text-sm font-medium text-white transition hover:bg-blue-700"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </section>

        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

function InfoCard({ title, value, image }) {
    const isArray = Array.isArray(value);
    const isLinkObject = value && typeof value === "object" && value.href;

    return (
        <div
            className="flex min-h-[220px] flex-col items-center rounded-xl
                 border border-gray-200 bg-white px-8 py-8 text-center
                 transition hover:border-blue-500 hover:shadow-sm"
        >
            {/* Title */}
            <h3 className="text-xs font-medium tracking-widest text-gray-700">
                {title}
            </h3>

            {/* Content */}
            <div className="mt-4 text-sm leading-relaxed text-gray-500">
                {isArray ? (
                    <ul className="space-y-2">
                        {value.map((item, idx) =>
                            typeof item === "string" ? (
                                <li key={idx}>{item}</li>
                            ) : (
                                <li key={idx}>
                                    <a
                                        href={item.href}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                ) : isLinkObject ? (
                    <a
                        href={value.href}
                        className="text-blue-600 hover:underline"
                    >
                        {value.text}
                    </a>
                ) : (
                    <p>{value}</p>
                )}
            </div>

            {/* Push icon to bottom */}
            <div className="flex-grow" />

            {/* Icon */}
            <img
                src={`/${image}`}
                alt=""
                className="mt-6 h-9 w-9 opacity-90"
            />
        </div>
    );
}

function QRCard({ src, label }) {
    return (
        <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-md bg-white shadow-sm">
            <img
                src={src}
                alt={label}
                className="h-20 w-20 object-contain"
            />
        </div>
    );
}

function FormField({ label, children }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>
            {children}
        </div>
    );
}
