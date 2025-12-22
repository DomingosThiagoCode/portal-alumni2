import React from 'react';
import { X, Mail, Phone, Linkedin, Building, MapPin, Calendar, GraduationCap } from 'lucide-react';
import styles from './Modal.module.css';

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.header}>
          <img src={data.foto} alt={data.nome} className={styles.largePhoto} />
          <h2>{data.nome}</h2>
          <p className={styles.cursoTag}>{data.curso}</p>
        </div>

        <div className={styles.body}>
          <div className={styles.infoRow}>
            <Calendar size={20} /> <span>Turma de {data.ano}</span>
          </div>
          <div className={styles.infoRow}>
            <MapPin size={20} /> <span>Mora em {data.cidade}, {data.estado}</span>
          </div>
          <div className={styles.infoRow}>
            <Building size={20} /> <span>Trabalha na empresa {data.empresa}</span>
          </div>

          <hr className={styles.divider} />

          <h3>Contatos</h3>
          <div className={styles.contactGrid}>
            <a href={`mailto:${data.email}`} className={styles.contactLink}><Mail /> Email</a>
            <a href="#" className={styles.contactLink}><Phone /> WhatsApp</a>
            <a href="#" className={styles.contactLink}><Linkedin /> LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
