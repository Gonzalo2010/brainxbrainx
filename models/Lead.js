import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Fecha de última actualización: 13 de mayo de 2024

Bienvenido/a a BrainX. Estos Términos y Condiciones rigen el uso del sitio web brainx.es y cualquier dispositivo o servicio ofrecido por BrainX.

1. Aceptación de los Términos y Condiciones

Al acceder o utilizar cualquier parte de BrainX, aceptas estar legalmente vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestros servicios.

2. Uso de los Servicios

Al utilizar BrainX, aceptas cumplir con todas las leyes y regulaciones aplicables.
No puedes utilizar nuestros servicios de manera que interfiera o dañe la funcionalidad del sitio web o cualquier dispositivo asociado.
3. Propiedad Intelectual

Todos los derechos de propiedad intelectual relacionados con BrainX, incluidos los derechos de autor, marcas comerciales y patentes, son propiedad de BrainX.
4. Limitación de Responsabilidad

En ningún caso BrainX será responsable por daños directos, indirectos, incidentales, especiales, consecuentes o punitivos que surjan del uso o la imposibilidad de utilizar nuestros servicios.
5. Modificaciones de los Servicios

Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de BrainX en cualquier momento y sin previo aviso.
6. Ley Aplicable

Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de [indica aquí el país o región donde se encuentra registrada tu empresa].
7. Contáctanos

Si tienes alguna pregunta o inquietud sobre estos Términos y Condiciones, no dudes en contactarnos a través de info@brainx.es.
Al utilizar BrainX, aceptas los términos y condiciones descritos anteriormente. Si no estás de acuerdo con estos términos, por favor no utilices nuestros servicios.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
