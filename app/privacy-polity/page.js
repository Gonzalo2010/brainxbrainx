import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Última actualización: 13 de mayo de 2024

Bienvenido/a a BrainX. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información que nos proporcionas al utilizar nuestros servicios.

1. Información que Recopilamos

Información Personal: Recopilamos información personal que nos proporcionas voluntariamente al registrarte o utilizar nuestros servicios, como nombre, dirección de correo electrónico y cualquier otra información que decidas compartir con nosotros.
Información del Dispositivo: Recopilamos información sobre tu dispositivo, incluida la dirección IP, el tipo de dispositivo, la versión del sistema operativo y otra información similar.
Datos de Uso: Podemos recopilar información sobre cómo utilizas nuestros servicios, como las acciones que realizas dentro de la aplicación o el sitio web.
2. Uso de la Información

Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios, comunicarnos contigo, personalizar tu experiencia y cumplir con nuestras obligaciones legales.
3. Compartir Información

No compartiremos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios, cumplir con la ley o proteger nuestros derechos.
4. Cookies y Tecnologías Similares

Utilizamos cookies y tecnologías similares para mejorar la funcionalidad de nuestros servicios y recopilar información sobre cómo los utilizas. Puedes configurar tu navegador para que rechace todas las cookies o te avise cuando se envíe una cookie.
5. Seguridad de la Información

Nos comprometemos a proteger la seguridad de tu información personal utilizando medidas de seguridad técnicas y organizativas adecuadas.
6. Tus Derechos

Tienes derecho a acceder, corregir y eliminar tu información personal. También puedes optar por no recibir comunicaciones de marketing de nuestra parte.
7. Cambios en la Política de Privacidad

Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te recomendamos que revises periódicamente esta página para estar al tanto de cualquier cambio.
8. Contáctanos

Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad o sobre cómo manejamos tu información personal, no dudes en contactarnos a través de info@brainx.es.
Al utilizar BrainX, aceptas los términos descritos en esta Política de Privacidad. Si no estás de acuerdo con estos términos, por favor no utilices nuestros servicios.

`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
