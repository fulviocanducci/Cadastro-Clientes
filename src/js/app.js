const form = document.getElementById("customer-form");
const fields = {
  fullName: document.getElementById("full-name"),
  email: document.getElementById("email"),
  cpf: document.getElementById("cpf"),
  cnpj: document.getElementById("cnpj"),
  companyName: document.getElementById("company-name"),
  zipCode: document.getElementById("zip-code"),
  street: document.getElementById("street"),
  number: document.getElementById("number"),
  city: document.getElementById("city"),
  state: document.getElementById("state"),
};
const formMessage = document.getElementById("form-message");
const zipCodeStatus = document.getElementById("zip-code-status");

// Initialize Select2 on #state
if (window.$) {
  $(fields.state).select2({
    language: "pt-BR",
    placeholder: "Selecione a UF",
    allowClear: false,
    width: "100%",
    dropdownAutoWidth: true,
  });
}

function digitsOnly(value) {
  return value.replace(/\D/g, "");
}

function showError(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  if (!error) return;
  error.textContent = message;
  error.hidden = !message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) field.setAttribute("aria-describedby", error.id);
  else field.removeAttribute("aria-describedby");

  // Handle Select2 error styling
  if (field.id === "state" && window.$) {
    const $select2 = $(field).data("select2");
    if ($select2) {
      const $container = $(field).next(".select2-container");
      if (message) {
        //$container.find('.select2-selection--single').css('border-color', '#dc2626');
        //$container.find(".select2-selection--single").css("box-shadow", "0 0 0 3px #fecaca");
      } else {
        $container.find(".select2-selection--single").css("border-color", "");
        $container.find(".select2-selection--single").css("box-shadow", "");
      }
    }
  }
}

function clearErrors() {
  Object.values(fields).forEach((field) => showError(field, ""));
  formMessage.hidden = true;
  formMessage.textContent = "";
  formMessage.className = "mb-4 rounded-lg p-3 text-sm";
}

function maskCpf(value) {
  const digits = digitsOnly(value).slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function maskCnpj(value) {
  const chars = value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 14);
  return chars
    .replace(/^(.{2})(.{3})/, "$1.$2")
    .replace(/^(.{2}\..{3})(.{3})/, "$1.$2")
    .replace(/^(.{2}\..{3}\..{3})(.{4})/, "$1/$2")
    .replace(/^(.{2}\..{3}\..{3}\/.{4})(.{2})$/, "$1-$2");
}

function maskZipCode(value) {
  const digits = digitsOnly(value).slice(0, 8);
  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}

function isValidCpf(value) {
  const cpf = digitsOnly(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
  let digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  if (digit !== Number(cpf[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
  digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  return digit === Number(cpf[10]);
}

function cnpjCharValue(char) {
  return char.charCodeAt(0) - 48;
}

function isValidCnpj(value) {
  const cnpj = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (cnpj.length !== 14 || !/^[A-Z0-9]{12}\d{2}$/.test(cnpj)) return false;
  if (/^([A-Z0-9])\1{13}$/.test(cnpj)) return false;

  const calculateDigit = (base, weights) => {
    const sum = base.split("").reduce((total, char, index) => {
      return total + cnpjCharValue(char) * weights[index];
    }, 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const base = cnpj.slice(0, 12);
  const firstDigit = calculateDigit(base, firstWeights);
  const secondDigit = calculateDigit(base + firstDigit, secondWeights);

  return firstDigit === Number(cnpj[12]) && secondDigit === Number(cnpj[13]);
}

function validateField(field) {
  const value = field.value.trim();

  if (field === fields.fullName && !value) {
    showError(field, "Nome completo é obrigatório.");
    return false;
  }
  if (field === fields.email) {
    if (!value) {
      showError(field, "E-mail é obrigatório.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(field, "Informe um e-mail válido.");
      return false;
    }
  }
  if (field === fields.cpf || field === fields.cnpj) {
    const other = field === fields.cpf ? fields.cnpj : fields.cpf;
    if (value && other.value.trim()) {
      showError(fields.cpf, "Informe CPF ou CNPJ, não ambos.");
      showError(fields.cnpj, "Informe CPF ou CNPJ, não ambos.");
      return false;
    }
    if (!value && !other.value.trim()) {
      showError(field, "Informe CPF ou CNPJ.");
      return false;
    }
    if (value && field === fields.cpf && !isValidCpf(value)) {
      showError(field, "Informe um CPF válido.");
      return false;
    }
    if (value && field === fields.cnpj && !isValidCnpj(value)) {
      showError(field, "Informe um CNPJ válido.");
      return false;
    }
  }
  if (field === fields.companyName && fields.cnpj.value.trim() && !value) {
    showError(field, "Razão social é obrigatória para CNPJ.");
    return false;
  }
  if (field === fields.zipCode && digitsOnly(value).length !== 8) {
    showError(field, "Informe um CEP.");
    return false;
  }
  if ([fields.street, fields.city, fields.state].includes(field) && !value) {
    showError(field, "Este campo é obrigatório.");
    return false;
  }
  if (field === fields.state && value && !/^[A-Za-z]{2}$/.test(value)) {
    showError(field, "Informe a UF com duas letras.");
    return false;
  }

  showError(field, "");
  return true;
}

fields.cpf.addEventListener("input", () => {
  fields.cpf.value = maskCpf(fields.cpf.value);
  showError(fields.cpf, "");
  showError(fields.cnpj, "");
});

fields.cnpj.addEventListener("input", () => {
  fields.cnpj.value = maskCnpj(fields.cnpj.value);
  showError(fields.cnpj, "");
  showError(fields.cpf, "");
});

fields.zipCode.addEventListener("input", () => {
  fields.zipCode.value = maskZipCode(fields.zipCode.value);
  showError(fields.zipCode, "");
  zipCodeStatus.textContent = "";
});

// Clear state error on Select2 change
if (window.$) {
  $(fields.state).on("change", function () {
    showError(fields.state, "");
  });
}

async function lookupZipCode() {
  const zipCode = digitsOnly(fields.zipCode.value);
  if (zipCode.length !== 8) return;

  zipCodeStatus.textContent = "Consultando CEP...";
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    if (!response.ok) throw new Error("CEP lookup failed");

    const data = await response.json();
    if (data.erro) {
      zipCodeStatus.textContent = "CEP não encontrado. Preencha o endereço manualmente.";
      return;
    }

    fields.street.value = data.logradouro || "";
    fields.city.value = data.localidade || "";
    const uf = (data.uf || "").toUpperCase();
    if (uf) {
      $(fields.state).val(uf).trigger("change");
    }
    zipCodeStatus.textContent = "";
    showError(fields.street, "");
    showError(fields.city, "");
    showError(fields.state, "");
  } catch {
    zipCodeStatus.textContent = "Não foi possível consultar o CEP. Preencha o endereço manualmente.";
  }
}

fields.zipCode.addEventListener("blur", lookupZipCode);

Object.values(fields).forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let isValid = true;
  const fieldsToValidate = [
    fields.fullName,
    fields.email,
    fields.cpf,
    fields.cnpj,
    fields.companyName,
    fields.zipCode,
    fields.street,
    fields.city,
    fields.state,
  ];

  fieldsToValidate.forEach((field) => {
    if (!validateField(field)) isValid = false;
  });

  if (!isValid) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  formMessage.textContent = "Cadastro validado com sucesso! Nenhum dado foi salvo.";
  formMessage.classList.add("bg-green-50", "text-green-700");
  formMessage.hidden = false;
  form.reset();
  zipCodeStatus.textContent = "";
  Object.values(fields).forEach((field) => showError(field, ""));
});
