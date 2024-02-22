const AboutPage = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: "0 auto",
      maxWidth: "800px",
      padding: "0 20px",
      color: "#333",
    },
    header: {
      textAlign: "center",
      color: "red ",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      marginBottom: "10px",
    },
    innerList: {
      marginLeft: "5rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          🎓 I&apos;m a student at FPT University Quy Nhơn AI Campus.
        </li>
        <li style={styles.listItem}>
          🔭 I’m currently learning Java, React, Node.js
        </li>
        <li style={styles.listItem}>❤️ I&apos;m passionate about:</li>
        <ul style={styles.innerList}>
          <li>🪐 Operating Systems (Windows)</li>
          <li>🖥️ Website Developer</li>
        </ul>
      </ul>
      <br />
    </div>
  );
};

export default AboutPage;
